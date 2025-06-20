
const jwt=require('jsonwebtoken');
const secret="12651";

const authController={
    login:(request,response)=>{
        //The values are here because of express.json() niddleware.
        const {username,password}=request.body;
        if(username==='admin'&&password==='admin'){
            const userDetails={
                name:"John Cena",
                email:"john@gmail.com"
            };

            const token= jwt.sign(userDetails,secret,{expiresIn:'1h'});
            response.cookie('jwtToken',token,{
                httpOnly:true,
                secure:true,
                domain:'localhost',
                path:'/'
            });
            response.json({message:'User authenticated', userDetails:userDetails});

            
        }
        else{
            response.status(401).json({message:'Invalid credentials'})
        }
    },
    logout:(request,response)=>{
        response.clearCookie('jwtToken');
        response.json({message:'User logged out successfully'});
    },
    isUserLoggedIn:(request,response)=>{
        const token=request.cookie.jwtToken
        if(!token){
            return response.status(401).json({message:"Unauthorized access"});
        }
        jwt.verify(token,secret,(error,userDetails)=>{
            if(error){
                return response.status(401).json({message:"Unauthorized access"});
            }
            else{
                return response.json({userDetails:userDetails});
            }
        })
    }
    
};
module.exports=authController;