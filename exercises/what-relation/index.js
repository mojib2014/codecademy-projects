const whatRelation = (percentSharedDNA) => {
  switch (true) {
    case percentSharedDNA < 0 || percentSharedDNA > 100:
      return "Invalid number please enter a number between 0-100   both inclusive";
      break;
    case percentSharedDNA === 0:
      return "You are likely not related.";
      break;
    case percentSharedDNA === 100:
      return "You are likely identical twins.";
      break;
    case percentSharedDNA >= 35 && percentSharedDNA <= 99:
      return "You are likely parent and child or full siblings.";
      break;
    case percentSharedDNA >= 14 && percentSharedDNA <= 34:
      return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
      break;
    case percentSharedDNA >= 6 && percentSharedDNA <= 13:
      return "You are likely 1st cousins.";
      break;
    case percentSharedDNA >= 3 && percentSharedDNA <= 5:
      return "You are likely 2nd cousins.";
      break;
    case percentSharedDNA >= 1 && percentSharedDNA <= 2:
      return "You are likely 3rd cousins";
      break;
  }
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(0));
// Should print 'You are likely 2nd cousins.'
