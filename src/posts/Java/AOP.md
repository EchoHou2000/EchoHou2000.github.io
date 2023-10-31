---
date: 2023-10-11
category:
  - Java
  - Spring
tag:
  - 重要
  - 原创
---

# 我是怎么用Spring AOP的？
## 业务需求

项目中需要对前端的元素、接口进行权限控制，如果权限不足，无法访问。而后端又有很多接口需要进行权限判断，每个接口都进行判断，会有很多重复性的代码，可维护性不高。

## 思路

所以我们需要把这些公共的代码抽出来，我们编写业务代码的时候，只需要关注具体不同的逻辑即可，不用写大量重复性的代码。而具体的业务逻辑相当于一个"织入"进去的操作。

在这个过程中，我们抽出来不是关键业务的同一类方法，并且封装成一个类用来判断权限。

我们可以使用Spring AOP的技术来实现，在AOP中，这个封装成的类，叫切面，可以用@Aspect实现。我们在调用每一个接口的时候，都需要先判断权限，所以给切面中具体的类加上@Before注解，代表在目标方法调用之前执行。

## 代码实现
我们希望最后的实现效果，是在Controller层的接口直接加上一个注解，就能实现权限判断，这个注解是我们自定义的，而这个注解如何工作的具体逻辑，需要在切面里写。

### 一、声明注解

我们想对角色权限进行控制，第一步就是先定义自己的注解，确定这个注解的位置后，切面才能工作。

```java
/**
 * @Retention 代表生命周期，这里是RUNTIME，表示运行期间一直存在
 * @Target 表示这个注解要加在方法上
 * @Document 表示这个注解会被加到Doc文档上
 * @Component 表示会被Spring进行管理，后面进行依赖注入
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
@Documented
@Component
public @interface ApiLimitedRole {
    String[] limitedRoleCodeList() default {};
}
```

### 二、定义切面。

```java
@Order(1)
@Component
@Aspect
public class ApiLimitedRoleAspect {

    @Autowired
    private UserSupport userSupport;

    @Autowired
    private UserRoleService userRoleService;

    // @Pointcut 表示切点的应用范围
    // 这里指发挥作用的注解具体是哪一个
    @Pointcut("@annotation(com.houbingzhi.bilibili.domain.annotation.ApiLimitedRole)")
    public void check(){

    }

    // 在调用Controller层时的接口时，会先进行下面这些权限判断
    // 再进行具体的业务逻辑
    @Before("check() && @annotation(apiLimitedRole)")
    public void doBefore(JoinPoint joinPoint, ApiLimitedRole apiLimitedRole){
      // 通用的判断权限的业务逻辑
      // ......
    }
}
```

### 三、应用注解
```java
@ApiLimitedRole(limitedRoleCodeList = {AuthRoleConstant.ROLE_LV0})
@DataLimited
@PostMapping("/user-moments")
public JsonResponse<String> addUserMoments(@RequestBody UserMoment userMoment) throws Exception {
  // 具体的业务逻辑
  // ......
  return JsonResponse.success();
  }
```

## Spring AOP的实现原理

Spring这个优秀的框架中，有很多设计模式的体现，比如单例模式，再比如AOP机制也应用了代理模式。

那么是如何应用代理模式的呢？

我们最前面定义注解的时候，在注解最上面用了一个@Component让Spring进行管理，这个我们自己定义的注解就成了Spring管理的一个Bean对象，然后我们为这个对象配置了一个切面。那么Spring在创建这个Bean的时候，实际上**创建的是这个Bean的代理对象**，后续对Bean中方法的调用，实际上是**代理类重写的代理方法**。

AOP使用的是两种动态代理，一种是JDK的动态代理，一种是CGLib的动态代理。

那么什么是动态代理？什么是静态代理？

动态代理比静态代理更加灵活，动态代理只需要实现接口即可，而对于静态代理，如果接口中的方法变了，目标对象和代理对象都要进行修改。

再说这两种动态代理方法有什么区别？

如果被代理的类有实现的接口，那就是JDK代理类；如果没有实现接口，是继承实现的，那就是CGLib动态代理类。