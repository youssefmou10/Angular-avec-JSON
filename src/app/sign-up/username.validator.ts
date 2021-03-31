import{AbstractControl, ValidationErrors} from "@angular/forms";   
      
export class ValidatorFn {
    static canotContainSpace(control: AbstractControl): ValidationErrors | null
    {
        if((control.value as string).indexOf(' ')>=0)
            return{
                canotContainSpace:true
            }
            return null;

        
    }
  }
  
      