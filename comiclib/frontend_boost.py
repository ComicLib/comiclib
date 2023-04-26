import tarfile, io, shutil
from pathlib import Path
import requests
s = requests.session()

dependencies = {
        "@fortawesome/fontawesome-free": "6.2.1",
        "@jcubic/tagger": "0.4.2",
        "allcollapsible": "1.1.0",
        "awesomplete": "1.1.5",
        "blueimp-file-upload": "10.32.0",
        "clsx": "1.1.1",
        "datatables.net": "1.11.5",
        "fscreen": "1.2.0",
        "inter-ui": "3.19.3",
        "jqcloud2": "2.0.3",
        "jquery": "3.6.0",
        "jquery-contextmenu": "2.9.2",
        "marked": "4.0.14",
        "open-sans-fontface": "1.4.0",
        "preact": "10.7.1",
        "react-toastify": "9.0.0-rc-2",
        "roboto-fontface": "0.8.0",
        "sweetalert2": "11.4.10",
        "swiper": "8.4.5",
        "tippy.js": "6.3.7"
    }

vendor_css = (
    "blueimp-file-upload/css/jquery.fileupload.css",      "@fortawesome/fontawesome-free/css/all.min.css",
    "jqcloud2/dist/jqcloud.min.css",                      "react-toastify/dist/ReactToastify.min.css",
    "jquery-contextmenu/dist/jquery.contextMenu.min.css", "tippy.js/dist/tippy.css",
    "allcollapsible/dist/css/allcollapsible.min.css",     "awesomplete/awesomplete.css",
    "@jcubic/tagger/tagger.css",                          "swiper/swiper-bundle.min.css",
    "sweetalert2/dist/sweetalert2.min.css",
)

vendor_js = (
    "blueimp-file-upload/js/jquery.fileupload.js",       "blueimp-file-upload/js/vendor/jquery.ui.widget.js",
    "datatables.net/js/jquery.dataTables.min.js",        "jqcloud2/dist/jqcloud.min.js",
    "jquery/dist/jquery.min.js",                         "react-toastify/dist/react-toastify.umd.js",
    "jquery-contextmenu/dist/jquery.ui.position.min.js", "jquery-contextmenu/dist/jquery.contextMenu.min.js",
    "tippy.js/dist/tippy-bundle.umd.min.js",             "@popperjs/core/dist/umd/popper.min.js",
    "allcollapsible/dist/js/allcollapsible.min.js",      "awesomplete/awesomplete.min.js",
    "@jcubic/tagger/tagger.js",                          "marked/marked.min.js",
    "swiper/swiper-bundle.min.js",                       "preact/dist/preact.umd.js",
    "clsx/dist/clsx.min.js",                             "preact/compat/dist/compat.umd.js",
    "preact/hooks/dist/hooks.umd.js",                    "sweetalert2/dist/sweetalert2.min.js",
    "fscreen/dist/fscreen.esm.js"
)

vendor_woff = (
    "@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2",
    "@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2",
    "open-sans-fontface/fonts/Regular/OpenSans-Regular.woff",
    "open-sans-fontface/fonts/Bold/OpenSans-Bold.woff",
    "roboto-fontface/fonts/roboto/Roboto-Regular.woff",
    "roboto-fontface/fonts/roboto/Roboto-Bold.woff",
    "inter-ui/Inter (web)/Inter-Regular.woff",
    "inter-ui/Inter (web)/Inter-Bold.woff",
)

print('Downloading front-end files, this is done only once')

for name in dependencies:
    print('downloading', name)
    r = s.get(f"https://registry.npmjs.com/{name}/-/{name.rpartition('/')[-1]}-{dependencies[name]}.tgz", allow_redirects=True)
    r.raise_for_status()
    with tarfile.open(fileobj=io.BytesIO(r.content), mode='r:gz') as t:
        for vendors, v_path in [(vendor_css, 'css/vendor'), (vendor_js, 'js/vendor'), (vendor_woff, 'css/webfonts')]:
            for v in vendors:
                if v.startswith(name+'/'):
                    path = v.removeprefix(name)
                    src = t.extractfile('package'+path)
                    to_path = Path(__file__).parent / 'LANraragi/public' / v_path / Path(v).name
                    to_path.parent.mkdir(parents=True, exist_ok=True)
                    to_path.write_bytes(src.read())