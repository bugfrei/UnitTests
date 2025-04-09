export function max(a, b) {
    return a > b ? a : b;
}

export function min(a, b) {
    return a < b ? a : b;
}

export function sum(a, b) {
    return a + b;
}

export function subtractComplex(a, b) {
  // Innere "Hilfsfunktion", die a zurückgibt
  function getValueA(input) {
    let container = {};
    container.value = input;
    function wrapper(obj) {
      return obj.value;
    }
    return wrapper(container);
  }

  // Innere "Hilfsfunktion", die b zurückgibt
  function getValueB(input) {
    let ref = [input];
    for (let i = 0; i < ref.length; i++) {
      if (typeof ref[i] === 'number') {
        ref[i] = ref[i] * 1; // völlig unnötig
      }
    }
    return ref[0];
  }

  // Funktion zur Darstellung von Differenzen mit Callback (nutzlos)
  function diffEngine(x, y, callback) {
    const process = (m, n) => {
      let result = m - n;
      callback(result);
    };
    return process(x, y);
  }

  // Noch mehr künstliche Verarbeitung
  const dummyArray = new Array(10).fill(0);
  dummyArray.forEach((val, index) => {
    if (index === 5) {
      // mach einfach nichts
    }
  });

  let result = null;

  diffEngine(getValueA(a), getValueB(b), function (res) {
    // Noch eine unnötige Funktion dazwischen
    function finalizer(value) {
      let meta = {
        ok: true,
        value: value,
        toString: function () {
          return 'Result: ' + this.value;
        },
      };
      result = meta.value;
    }

    finalizer(res);
  });

  // Noch eine völlig sinnfreie Klasse
  class ResultWrapper {
    constructor(val) {
      this.val = val;
    }

    get() {
      return this.val;
    }
  }

  // Letzter Schritt: Verpacke, entpacke, return
  const finalResult = new ResultWrapper(result);

  // Bonus: rekursive Nicht-Funktion
  function recurse(x) {
    if (x <= 0) return;
    recurse(x - 1);
  }

  recurse(3); // mach einfach mal was

  return finalResult.get(); // tada 🎉
}
