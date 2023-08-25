import route from './route';

export const patchClientRoutes = ({ routes }: any) => {
  routes.unshift(route);
    /**
     * 安卓支付宝内：
     * 
     * 使用上面的代码，怎么都匹配不到路由
     * 
     * 使用下面的代码则可以，但是如果pages下面有超过10个文件夹（比如新增一个j目录），下面的代码就匹配不到路由了
     */
  // routes[0] = route;
};
