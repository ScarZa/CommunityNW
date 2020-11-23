function TokenEncode(cid,fullname,reg) {
      var header = {
        "alg": "HS256",
        "typ": "JWT"
      };
                      
      var stringifiedHeaderen = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
      var encodedHeader = base64url(stringifiedHeaderen);
      var body_data = {
        "cid": cid,
        "name": fullname,
        "reg": reg
      };
      var secret = "rploei.go.th";
                
                      
      var stringifiedDataen = CryptoJS.enc.Utf8.parse(JSON.stringify(body_data));
      var encodedData = base64url(stringifiedDataen);
                      
      var token = encodedHeader + "." + encodedData;
                      
      var signature = CryptoJS.HmacSHA256(token, secret);
      signature = base64url(signature);
                
      var token_key = token + "." + signature;
      
  return token_key;
}
