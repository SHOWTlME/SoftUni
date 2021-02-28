function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputField = document.querySelector('#inputs>textarea');

   function onClick() {
      let arr = JSON.parse(inputField.value);
      const resultArray = [];
      const resultObject = {};

      for (const element of arr) {
         const tokens = element.split(' - ');
         const restaurant = tokens[0];
         const workers = tokens[1].split(' ');
         
         for (const iterator of object) {
            
         }
      }
   }
}

/*
array = []

object = {
   restaurant:
   {workers:salary}
   bestSalary
   AverageSalary

}
*/