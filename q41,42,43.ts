let show_magicians=(array:string[])=>{
    console.log(array);
}
let i=0;
let array_mag=['Ali','Ahmad','Abdullah'];
let newarr=[''];
let add_great=(array:string[])=>{               //The changed one.
    array.forEach((element)=>{
        array[i]="The great "+ element;
        i++;
    })
}

let add_great_unchanged=(array:string[],newarray:string[])=>{               //The unchanged one.
    array.forEach((element)=>{
        newarray[i]="The great "+ element;
        i++;
    })
}

add_great_unchanged(array_mag,newarr) //Unchanging function
show_magicians(array_mag);      //Old array
show_magicians(newarr);     //New array
add_great(array_mag);       //Changing function
show_magicians(array_mag);   //Old array
