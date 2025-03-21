import sqlite3

def kullanici_bilgisi_getir(kullanici_id):
    conn = sqlite3.connect('veritabani.db')
    cursor = conn.cursor()
    sorgu = "SELECT * FROM kullanicilar WHERE id = ?;"
    cursor.execute(sorgu, (kullanici_id,))
    return cursor.fetchone()

kullanici_id = input("Kullanıcı ID'si girin: ")
print(kullanici_bilgisi_getir(kullanici_id))
