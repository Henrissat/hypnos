const listHotels = [
    {author:"Pierre Die", category:["all","Famille"], description:"Lorem Ipsum is simply", src:"https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul Roux", category:["all","Couple"], description:"dummy text of the printing and", src:"https://images.pexels.com/photos/6954439/pexels-photo-6954439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {author:"Jacques Ritcher", category:["all","Portrait"], description:"Ipsum has been the industry", src:"https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Martine Vacances", category:["all","Grossesse"], description:"standard dummy text ever", src:"https://images.pexels.com/photos/2316856/pexels-photo-2316856.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"George Townley", category:["all","Mariage"], description:"since the 1500s", src:"https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline Sushi", category:["all","Bébé"], description:"took a galley of type", src:"https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Clément Dezelus", category:["all","Portrait"], description:"Contrary to popular belief", src:"https://images.pexels.com/photos/1171980/pexels-photo-1171980.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Martine", category:["all","Famille"], description:"Lorem is not simply", src:"https://images.pexels.com/photos/1914984/pexels-photo-1914984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"John Doe", category:["all","Mariage"], description:"Where does it come from?", src:"https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"George Townley", category:["all","Grossesse"], description:"over 2000 years old", src:"https://images.pexels.com/photos/3369464/pexels-photo-3369464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
    {author:"Pierre", category:["all","Bébé"], description:"the undoubtable source.", src:"https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Clément Dezelus", category:["all","Portrait"], description:"Lorem Ipsum is simply", src:"https://images.pexels.com/photos/6895533/pexels-photo-6895533.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
    {author:"Indiana Jones", category:["all","Mariage"], description:"dummy text of the printing an", src:"https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Pierre", category:["all","Couple"], description:"Ipsum has been the industry", src:"https://images.pexels.com/photos/3692738/pexels-photo-3692738.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", category:["all","Grossesse"], description:"standard dummy text ever", src:"https://images.pexels.com/photos/3115516/pexels-photo-3115516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"George Townley", category:["all","Bapteme"], description:"since the 1500s", src:"https://images.pexels.com/photos/10630087/pexels-photo-10630087.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Clément Dezelus", category:["all","Famille"], description:"Lorem Ipsum is simply", src:"https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul", category:["all","Couple"], description:"Contrary to popular belief", src:"https://images.pexels.com/photos/412295/pexels-photo-412295.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Martine Mer", category:["all","Famille"], description:"the undoubtable source", src:"https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"George Townley", category:["all","Grossesse"], description:"over 2000 years old", src:"https://images.pexels.com/photos/2994027/pexels-photo-2994027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", category:["all","Bébé"], description:"dummy text of the printing an", src:"https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Indiana Jones", category:["all","Bapteme"], description:"Lorem Ipsum is simply", src:"https://images.pexels.com/photos/6263079/pexels-photo-6263079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {author:"Martine", category:["all","Grossesse"], description:"took a galley of type", src:"https://images.pexels.com/photos/590496/pexels-photo-590496.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul", category:["all","Portrait"], description:"Where does it come from?", src:"https://images.pexels.com/photos/6934325/pexels-photo-6934325.png?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", category:["all","Bébé"], description:"Lorem Ipsum is simply", src:"https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Clément Dezelus", category:["all","Mariage"], description:"There are many variations ", src:"https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"George Townley", category:["all","Bapteme"], description:"Lorem Ipsum is simply", src:"https://images.pexels.com/photos/10634779/pexels-photo-10634779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Indiana Jones", category:["all","Bébé"], description:"Contrary to popular belief", src:"https://images.pexels.com/photos/50692/brothers-family-siblings-boys-50692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {author:"Martine Ski", category:["all","Bapteme"], description:"since the 1500s", src:"https://images.pexels.com/photos/10629783/pexels-photo-10629783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
];

export default listHotels;