var Template = function(templateString, obj) {
    var match = false;
    $.each(obj, function(k, v) {
        var keyStr = "${" + k + "}";
        if(templateString.indexOf(keyStr) !== -1) {
            match = true;
            if(typeof v === "function"){
                v = v(obj);
            }
            templateString = templateString.split(keyStr).join(v);
        }
    });
    if(match) {
        return Template(templateString, obj);  
    } else {
        return templateString;
    }
};