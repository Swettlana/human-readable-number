module.exports = function toReadable (number) 
    {
    const one_nineteen = 
    ["zero",
    "one", 
    "two", 
    "three", 
    "four", 
    "five", 
    "six", 
    "seven", 
    "eight", 
    "nine",
    "ten",
    "eleven", 
    "twelve",
    "thirteen", 
    "fourteen",
    "fifteen", 
    "sixteen",
    "seventeen", 
    "eighteen", 
    "nineteen"];
    const dozens = ["","ten","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    const Make_str_one=(num)=> {
        return one_nineteen[num];
    }

    const Make_str_two=(num)=>
    {
        const str = num.toString();
        const dos = dozens[Number(str[0])];
        const ed = Number(str[1]);
        
        if (str[1] === 0) 
        { 
            return dos;
        }
        else 
        { 
            return dos + " " + Make_str_one(ed);
        }
    }

    const Make_str_three = (num) =>
    {
        const str = num.toString();
        const hun = Number(str[0]);
        const num_dos = Number(str[1]+str[2]);
        
        if (num_dos === 0)
        {
            return Make_str_one(hun) + " " + "hundred"
        }
        else
        {
            return Make_str_one(hun) + " "+ "hundred" + " " + Make_str_two(num_dos);
        }
    }

    let str;

    if ((number >=0) && (number<20))
        {
            str = Make_str_one(number);
        }
    else if (number >=20 && number<100)
        {
            str= Make_str_two(number);
        }
    else if (number>100)
        {
            str = Make_str_three(number);
        }
        return str;
}


