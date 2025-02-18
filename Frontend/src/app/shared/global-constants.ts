export class GlobalConstants {
    //Message
    public static genericError: string = "Something went wront, Please tray again later";

    public static unauthorized: string = "You are not authorized person to access this page";

    //regex
    public static nameRegex: string = "[a-zA-Z0-9 ]*";

    public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static phoneRegex: string = "^[e0-9]{10,10}$";

    public static productExistError: string = "Product already exists";
    
    public static productAdded: string = "Product added successfully";


    //Variable
    public static error: string = "error";
}