function DNAStrand(dna = "AAAA") {
  const formatters = [
    { pattern: /A/g, replacedBy: /T/ },
    { pattern: /T/g, replacedBy: /A/ },
    { pattern: /C/g, replacedBy: /G/ },
    { pattern: /G/g, replacedBy: /C/ },
  ];
  return formatters.reduce((a,f) => dna.replace(f.pattern, f.replacedBy));
}

console.log(DNAStrand());
