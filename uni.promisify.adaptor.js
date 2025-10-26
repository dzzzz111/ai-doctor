// 确保 uni 对象存在后再添加拦截器
if (typeof uni !== 'undefined' && uni.addInterceptor) {
  try {
    uni.addInterceptor({
      returnValue (res) {
        if (!(!!res && (typeof res === "object" || typeof res === "function") && typeof res.then === "function")) {
          return res;
        }
        return new Promise((resolve, reject) => {
          res.then((res) => {
            if (!res) return resolve(res) 
            return res[0] ? reject(res[0]) : resolve(res[1])
          });
        });
      },
    });
  } catch (error) {
    console.error('添加 uni 拦截器失败:', error);
  }
} else {
  console.warn('uni 对象不可用，跳过添加拦截器');
}