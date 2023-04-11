///////////////////////////-----------------///////////////////////////
/*
Bu challenge'ta data.js dosyası içerisindeki kişi verilerini
kullanacağız. data.js dosyası içerisindeki array'deki her bir
obje bir kişiyi ve verilerini içeriyor.
Yapmanız gereken;
- data.js dosyasının içerisindeki arraydeki her bir objeyi map
etmek ve timestamp şeklindeki verileri okunabilir tarih ve saat
olarak dönüştürmek.
- isim ve soyisim değerlerini birleştirip adSoyad olarak tek bir
key'e atamak.
- map edilerek dönülen bu yeni array sadece adSoyad ve dogumTarihi
key'lerini içermeli. Geri kalan veriler gözükmeyecek.

Bittiğinde array'in içerisindeki objeler şu şekilde olmalı:
{
    adSoyad: "Alperen Üstün",
    dogumTarihi: "Fri Aug 20 1971"
}

toDateString() methoduna göz atabilirsiniz.

*/
///////////////////////////-----------------///////////////////////////

import userData from "./data.js";

function dataDonustur(data) {
    // Kod'unuzu buraya yazın
}

console.log(dataDonustur(userData));
