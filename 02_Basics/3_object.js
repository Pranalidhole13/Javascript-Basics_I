//Object Creation has two methods
// 1.Literal==>not singleton object
// 2.constructor==>singleton object

//1.object Literal
const muSym =Symbol("Key1")
const JsUser={
   name:"Hritik",
   age:21,
   [muSym]:"Key1",  //To access Symbol we need to put Square bracket
   email:"hritik@google.com",
   islOggedIn:false, 
   lastLogin:["Moday","Sunday"]

}

//Access Object
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser)
JsUser.email="hritil@mac.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
JsUser.email="hritil@macrosoft.com"

JsUser.gretting = Function();{
  console.log("Hello JS USer");
}
// JsUser.gretting1 = Function();{
//     console.log('Hello JS User', ${ this.name});
//   }

  console.log(JsUser.gretting())
//   console.log(JsUser.gretting1())

