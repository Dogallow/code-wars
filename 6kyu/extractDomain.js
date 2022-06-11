// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
  //your code here
//   start with "http://, http://www., or https://www."
  if(url.includes('https://www.')){
       url = url.split(".")
        return url[1]
      }else if(url.includes('http://www.')){
       url = url.split('.')
        return url[1]
      }else if(url.includes('https://')){
        url = url.split('//')
         url.splice(0,1)
        url = url.join('').split('.')
        return url[0]
      }else if (url.includes('http://')){
    
         url = url.split('//')
         url.splice(0,1)
        url = url.join('').split('.')
        return url[0]
      
        
        
      }else if(url.includes('www')){
        url = url.split('.')
        return url[1]
      }else{
        url = url.split('.')
        return url[0]
      }
  
  
}
