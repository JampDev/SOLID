(()=>{

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

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
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor ({name, gender,birthdate}: PersonProps){            
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        person: PersonProps;
    }

    class User extends Person {
        
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email, role, person}: UserProps){
            super(person);
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }


    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        user: UserProps;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({workingDirectory,lastOpenFolder,user}: UserSettingsProps
        ){
            super(user);
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings(
        {workingDirectory:'/usr/home',
         lastOpenFolder:'/home',
         user: {
            email: 'jonathan@gmail.com',
            role: 'Admin',
            person: {
                name: 'Jonathan',
                gender: 'M',
                birthdate: new Date('1996-02-18')
            }
         }
        }
    )

    console.log({userSettings});

})();