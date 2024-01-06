const  sendEmailController = (req,res) =>{
   try{
     return res.status(200).send({
        success:true,
        message:"Your message is Send Successfully"
     })
   } catch(err){
    console.log(err);
    return res.status(500).send({
        success:false,
        message: 'Send Email Api error',
        err
    })
   }
}
module.exports = {sendEmailController};