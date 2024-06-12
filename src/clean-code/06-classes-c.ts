(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia!

    // Definicion corta en TS
    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({ workingDirectory, lastOpenFolder }: SettingsProps
        ) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public setting: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingProps) {
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.setting = new Settings({lastOpenFolder, workingDirectory});
        }
    }

    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder: '/home',
            name: 'Jonathan',
            gender: 'M',
            birthdate: new Date('1996-02-18'),
            email: 'jonathan@gmail.com',
            role: 'Admin'

        }
    )

    console.log({ userSettings });

})();