import sqlite3

def kullanici_bilgisi_getir(kullanici_id):
    conn = sqlite3.connect('veritabani.db')
    cursor = conn.cursor()
    sorgu = f"SELECT * FROM kullanicilar WHERE id = {kullanici_id};"
    cursor.execute(sorgu)
    return cursor.fetchone()

kullanici_id = input("Kullanıcı ID'si girin: ")
print(kullanici_bilgisi_getir(kullanici_id))
