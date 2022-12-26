let secret = Symbol('secretKey')
let object = new Object
object[secret] = 'f923jfaslk&)fai25124Jifa&upkmg10y'
Object.keys(object) //Array []
object[secret] //"f923jfaslk&)fai25124Jifa&upkmg10y"
