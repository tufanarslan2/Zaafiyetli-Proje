# XSS Zafiyeti Örneği

Bu proje, bir XSS (Cross-Site Scripting) zafiyeti içeren ve düzeltilmiş bir kod örneği içermektedir.

## Zafiyet Bilgisi

### OWASP Kategorisi
- **Kategori**: A03:2021 - Injection
- **Alt Kategori**: Cross-Site Scripting (XSS)

### Zafiyet Vektörü
- **Vektör**: Kullanıcı girdisinin doğrudan HTML'e eklenmesi (`innerHTML` kullanımı).
- **Örnek Saldırı Vektörü**:
  ```html
  <img src="x" onerror="alert('XSS Zafiyeti!')">

# CVSS Skoru: 6.1 (Medium)
# CVSS Vektörü: CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N

<video src="https://github.com/user-attachments/assets/0cb02afd-b011-4ec5-8aef-dad69ae9c2c3" width="500" controls></video>
