function digital_root(n = 43) {
 if (n < 10)
   return n;
 for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
   sum += Number(n[i]);

   return digital_root(sum);
}

console.log(digital_root());