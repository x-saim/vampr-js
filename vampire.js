class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVamps = 0;
    let currVamp = this;

    while (currVamp.creator) {
      currVamp = currVamp.creator;
      numOfVamps++;
    }
    return numOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let otherVamp = this;
    return vampire.numberOfVampiresFromOriginal > otherVamp.numberOfVampiresFromOriginal ? true : false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

  closestCommonAncestor(vampire) {
    let currVamp = this;

    if (currVamp === vampire) {
      return currVamp; // Return the vampire itself if it's the same vampire
    }

    const visitedVampires = [];

    //while loop will terminate once currVamp.creator is null.
    while (currVamp) {
      visitedVampires.push(currVamp);
      currVamp = currVamp.creator;
    }

    while (vampire) {
      if (visitedVampires.includes(vampire)) {
        return vampire; // Found the common ancestor
      }
      vampire = vampire.creator;
    }

    return null; // No common ancestor found

  }
}

module.exports = Vampire;