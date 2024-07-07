import tarfile, io, shutil
from pathlib import Path
import requests

import logging
logger = logging.getLogger(__name__)

dependencies = {
        '@fortawesome/fontawesome-free': '6.4.0',
        '@jcubic/tagger': '0.4.4',
        '@popperjs/core': '2.11.7',
        'allcollapsible': '1.1.0',
        'awesomplete': '1.1.5',
        'blueimp-canvas-to-blob': '3.29.0',
        'blueimp-file-upload': '10.32.0',
        'blueimp-load-image': '5.16.0',
        'blueimp-tmpl': '3.20.0',
        'clsx': '1.2.1',
        'datatables.net': '1.13.4',
        'dom7': '4.0.6',
        'fscreen': '1.2.0',
        'inter-ui': '3.19.3',
        'jqcloud2': '2.0.3',
        'jquery': '3.6.4',
        'jquery-contextmenu': '2.9.2',
        'js-tokens': '4.0.0',
        'loose-envify': '1.4.0',
        'marked': '4.3.0',
        'open-sans-fontface': '1.4.0',
        'preact': '10.13.2',
        'react': '18.2.0',
        'react-dom': '18.2.0',
        'react-toastify': '9.1.2',
        'roboto-fontface': '0.8.0',
        'scheduler': '0.23.0',
        'ssr-window': '4.0.2',
        'sweetalert2': '11.7.3',
        'swiper': '8.4.7',
        'tippy.js': '6.3.7'
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

vendor_version = 0
version_file = Path(__file__).parent / 'LANraragi/public/version'
if not version_file.exists() or int(version_file.read_text()) < vendor_version:
    logger.info('Installing/updating front-end files...')

    s = requests.session()
    for name in dependencies:
        logger.info('downloading %s', name)
        r = s.get(f"https://registry.npmjs.com/{name}/-/{name.rpartition('/')[-1]}-{dependencies[name]}.tgz", allow_redirects=True, timeout=15)
        r.raise_for_status()
        with tarfile.open(fileobj=io.BytesIO(r.content), mode='r:gz') as t:
            for vendors, v_path in [(vendor_css, 'css/vendor'), (vendor_js, 'js/vendor'), (vendor_woff, 'css/webfonts')]:
                for v in filter(lambda v:v.startswith(name+'/'), vendors):
                    path = v.removeprefix(name)
                    src = t.extractfile('package'+path)
                    to_path = Path(__file__).parent / 'LANraragi/public' / v_path / Path(v).name
                    to_path.parent.mkdir(parents=True, exist_ok=True)
                    to_path.write_bytes(src.read())
    shutil.copyfile(Path(__file__).parent / 'LANraragi/public/css/vendor/all.min.css', Path(__file__).parent / 'LANraragi/public/css/vendor/fontawesome-all.min.css')
    version_file.write_text(str(vendor_version))