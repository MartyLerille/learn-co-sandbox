
function outerFunction() {
  innerVariable = "I'm sort of a secret.";

function innerScope(){
    var inaccessible = "Nothing can touch me.";
    
      return innerVariable;
  }
}

innerScope();