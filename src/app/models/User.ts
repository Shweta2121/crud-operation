export class User {
    id!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    Phone!: Number;
    Company!: string;
    Birthday!: string;
    Password!: string;
    confirmPassword!: string;
    Gender!: string;
    isDeleting: boolean = false;
}