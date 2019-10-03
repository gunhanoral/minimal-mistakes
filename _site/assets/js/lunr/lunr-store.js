var store = [{
        "title": "Python ile resim boyutu ölçeklendirmek",
        "excerpt":"Siteyi yapılandırırken fotoğrafımın boyutlarını ölçeklendirmem gerektiğinde bu kadar temel bir işlemi yapabileceğim program bulamamak beni ufaktan afallattı. Sonra da hazır elimin altında Python var diyip Python ile bunu yapıp yapamayacağımı görmek istedim. Kısa bir google aramasından sonra bu siteye ulaştım. Burada yer alan ilk kod parçasını kullanarak basit aritmetik işlemlerle...","categories": ["python"],
        "tags": ["python","image","resize"],
        "url": "/python/python-resim-boyutu/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "tcl expect ile huawei konfigürasyonu",
        "excerpt":"Özellikle network cihazlarından çeşitli komut çıktılarını almak veya konfigürasyon değişikliği yapmak gerektiğinde expect akla ilk gelen seçeneklerden birisi. Cihazdan verilen yanıtlara göre çeşitli alt dallara inilebilmesi; yani “interface down ise şöyle yap, yok interface up fakat üzerinden trafik geçmemişse böyle yap” diyebilmenizi sağlayan bir yapıda olması expect’i uzunca bir süre...","categories": ["network"],
        "tags": ["tcl","expect","huawei","config"],
        "url": "/network/expect-ile-konfigurasyon/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "UDP nedir ne değildir?",
        "excerpt":"UDP - User Datagram Protocol Datagram nedir? Şimdiye kadar datagram’ın ne olduğunu soran bile duymadım ama yine de tanımlayalım. RFC 1594‘e göre Datagram: Datagram A self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this...","categories": ["network"],
        "tags": ["data","ip","udp","layer 4","transport","featured"],
        "url": "/network/udp-nedir/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "Tcpdump hakkında",
        "excerpt":"Tcpdump Bana kalırsa bir networkçü için olmazsa olmaz şeylerden birisi Wireshark, diğeri de tcpdump’tır. İletişim için kullanılan mesajlaşmaları en ham haliyle görebileceğiniz ve anlamlandırabileceğiniz, yer yer protokol anlamak için yer yer de troubleshooting için kullanmak isteyeceğiniz tcpdump’tan bahsediyorum. Sadece network mühendisleri değil, ses ekiplerinden sistem ekiplerine herkes çok temel kontroller...","categories": ["network"],
        "tags": ["data","ip","frame","ethernet","wireshark","Protocols","featured"],
        "url": "/network/tcpdump/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "Python Asyncio port scanner",
        "excerpt":"Today I needed to scan a few thousands of network devices on some ports and of course I needed some kind of concurrency. And here below is a quick, dirty and mostly crappy implementation of asyncio port scanning. Use at your own risk. import asyncio import time now = time.time()...","categories": ["python"],
        "tags": ["python","tcp","port check","port scanner","asyncio","featured"],
        "url": "/python/async-port-check/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "GNS3 VM Kurulumu",
        "excerpt":"Windows 10 üzerine GNS3 kurarken bazı dertler, çileler çektim. Biraz kendime not olsun diye, biraz da internette arayıp derdine derman bulamayanlara çözüm olsun diye buraya not düşüyorum. GNS3 Bildiğiniz üzere GNS3 network cihazlarında kullanılan işletim sistemlerini bilgisayarınızda çalıştırabileceğiniz bir uygulama. Özellikle eğitim amaçlı ve test amaçlı çokça kullanılıyor. CCNA, CCNP...","categories": ["network"],
        "tags": ["gns3","gns3 vm","VirtualBox"],
        "url": "/network/gns_vm_kurulumu/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "Ansible Notları",
        "excerpt":"Ansible Nedir? Ansible “Simple IT Automation” mottosuyla çıkan IT otomasyonunu kolaylaştıran (ve hatta automation harici orchestration da yapabilen) Python temelli bir yazılım. Ansible sayesinde birden fazla cihaza bağlanıp basit komutları çalıştırabileceğimiz gibi, kompleks senaryoları da gerçekleştirebiliyoruz. Şimdiye kadar yazdığım en kompleks playbook uptime’ı 300 günün üzerindeki linux cihazları tespit etmek...","categories": ["network"],
        "tags": ["network","python","ansible","network automation","network orchestration","featured"],
        "url": "/network/ansible-notlari/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "Ansible dinamik envanter",
        "excerpt":"Dinamik envanter? Ansible host dosyasını sistemlerimizdeki her değişiklikte güncelleyeceksek işimiz iş demektir. Ancak Ansible bizim için bu durumu da öngörmüş ve çeşitli imkanlar sağlamış. Tabi biz her zaman AWS (ya da benzeri bir yapı) ile çalışacak değiliz. Özelleştirilmiş? Özelleştirilmişten kasıt kendi üretimimiz, el emeğimiz, python scriptimiz (ya da istediğiniz bir...","categories": ["network"],
        "tags": ["network","python","ansible","network automation","network orchestration","featured"],
        "url": "/network/ansible-dynamic-inventory/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "Jinja2 Şablonları",
        "excerpt":"Giriş Öncelikle bir özet ile başlayalım. Jinja2 çeşitli şablonlar üretmemize yarayan bir Python kütüphanesidir. Biz de bu şablonları network cihazlarının configlerini oluşturmada kullanacağız. Böylece; büyük config dosyaları ile uğraşmaktansa sadece değişkenlerle oynayacağız, cihazlar belli bir şablondan çıkmış olacağı için unutulmuş kısımlar olmayacak, değişiklikleri cihazlara uygulamak kolaylaşacak. Bu amaçlarımıza Python ve...","categories": ["python"],
        "tags": ["Python","Jinja2"],
        "url": "/python/jinja2-templating/",
        "teaser":"/assets/images/gologo300x300.jpg"},{
        "title": "Netmiko",
        "excerpt":"Netmiko, Kirk Byers (CCIE) tarafından network cihazlarının yönetimini kolaylaştırmak amacıyla Python’ın Paramiko isimli ssh kütüphanesi üzerine yazılmış, pek çok network mühendisinin severek kullandığı bir Python modülüdür. Daha sonradan telnet için de bu modülü geliştirmiş ve Netmiko’ya da eklemiş ama kütüphanenin isminde bu yönde bir değişiklik yapmamış. :) Modülün sisteminizde halihazırda...","categories": ["python"],
        "tags": ["Python","netmiko"],
        "url": "/python/netmiko/",
        "teaser":"/assets/images/gologo300x300.jpg"}]
