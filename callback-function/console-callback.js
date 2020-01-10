function doSomething(callback) {
      setTimeout(() => {
            console.log('do something');
            callback();
      }, 3000);
}

function foo() {
      console.log('foo');
}

doSomething(foo);