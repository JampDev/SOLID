(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        
        const fruits: string[] = ['manzana','cereza','ciruela'];

        return fruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {

        switch(color){
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas']
            default:
                throw Error('the color must be: red, yellow, purple');
        }

    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        //Sugerencia usar !isFirstStepWorking para negar el boolean y evitar usar === lo que sea.
        if (isFirstStepWorking === false) return 'First step broken.';
    
        if (isSecondStepWorking === false) return 'Second step broken.';

        if (isThirdStepWorking === false) return 'Third step broken.'; 

        return isFourthStepWorking === false ?  'Fourth step broken.' : 'Working properly!';

       
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




