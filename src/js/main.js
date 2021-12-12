console.log(
  function greek_comparator(lhs, rhs) {
    const greek_alphabet = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta',
      'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu',
      'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma',
      'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega']
    const lhsIndex = greek_alphabet.indexOf(lhs)
    const rhsIndex = greek_alphabet.indexOf(rhs)
    if (lhsIndex - rhsIndex < 0) {
      return "result should be negative"
    } else if (lhsIndex - rhsIndex === 0) {
      return 0
    }
      return "result should be positive"
  }()
);
// [getSum] done