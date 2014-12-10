var BN_XLIT = {
  'অ':'a', 'আ':'ā', 'ই':'i', 'ঈ':'ī', 'উ':'u', 'ঊ':'ū',
  '্':'',  'া':'ā', 'ি':'i', 'ী':'ī', 'ু':'u', 'ূ':'ū',
  'ঋ':'ri', 'এ':'e', 'ঐ':'ai', 'ও':'o', 'ঔ':'au',
  'ৃ':'ri', 'ে':'e', 'ৈ':'ai', 'ো':'o', 'ৌ':'au',
  'ক':'k',  'খ':'kh',  'গ':'g',  'ঘ':'ɡh',  'ঙ':'ng',
  'চ':'c', 'ছ':'ch', 'জ':'j', 'ঝ':'jh', 'ঞ':'ñ',
  'ট':'ṭ',  'ঠ':'ṭh',  'ড':'ḍ',  'ঢ':'ḍh',  'ণ':'ṇ',
  'ত':'t', 'থ':'th', 'দ':'d',  'ধ':'dh',  'ন':'n',
  'প':'p',  'ফ':'ph',  'ব':'b',  'ভ':'bh', 'ম':'m',
  'য':'j', 'র':'r', 'ল':'l',
  'শ':'sh', 'ষ':'ṣ', 'স':'s', 'হ':'h',
  'ড়':'ṛ', 'ঢ়':'ṛh', 'য়':'y',
  'ৎ':'t', 'ং':'ng', 'ঃ':'ḥ','ঁ':'◌̃',
  '\'':'a', '@':'æ', ':':'ô'
};

function bnXlit(bengali){
  var xlit=""
  for (var i = 0, len = bengali.length; i < len; i++) {
    b = bengali[i];
    if (b in BN_XLIT) x = BN_XLIT[b];
    else x = b;
    xlit+=x;
  }
  return xlit;
}

function bnXlitRef(){
  var ref="";
  for (var bn in BN_XLIT){
    x = BN_XLIT[bn]
    ref+="<span class='ref'><span class='bn'>"+bn+"</span><span class='xt'>"+x+"</span></span> ";
  }
  return ref;
}