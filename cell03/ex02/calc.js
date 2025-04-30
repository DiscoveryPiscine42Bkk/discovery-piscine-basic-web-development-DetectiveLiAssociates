setInterval(() => { alert('Please, use me...'); }, 30000);

    function calc() {
      const v1 = parseFloat(document.getElementById('v1').value);
      const v2 = parseFloat(document.getElementById('v2').value);
      const process = document.getElementById('operand').value;
      let doCalc;

      if ((process==='/' || process==='%') && v2 === 0) {
        doCalc = "It's Over 9000!";
        console.log(doCalc); alert(doCalc); 
        return;
      }
      switch (process) {
        case '*':
          doCalc = v1*v2;
          break;
        case '/':
          doCalc = v1/v2;
          break;
        case '%':
          doCalc = v1%v2;
          break;
        case '+':
          doCalc = v1+v2;
          break;
        case '-':
          doCalc = v1-v2;
          break;
        default:
          doCalc = '';
      }
      console.log("Result: ", doCalc); alert("Result: " + doCalc);
    }
