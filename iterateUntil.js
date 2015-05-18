function iterateUntil(fun, check, init) {
  ret = [];
  result = fun(init);

  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }
  return ret;
}

// for use with jsc
debug(iterateUntil(function(n) { return n + n; },
             function(n) { return n <= 1024; }, 1));
// => [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
