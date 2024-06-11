(()=>{

    type Gender = 'M' | 'F';

    // Definicion larga en TS
    /*class Person{
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthadate: Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthadate;
        }
    }*/
   
    // No aplicando el principio de responsabilidad unica

    // Definicion corta en TS
    class Person {
        constructor (
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jonathan@gmail.com',
        'Admin',
        'Jonathan',
        'M',
        new Date('1996-02-18')
    )

    console.log({userSettings});

})();