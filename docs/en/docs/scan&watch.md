# Details about scanning and watching

## Triggers of scanning

Scanning can be triggered in the following four ways:

* When starting ComicLib, perform a full scan
* After ComicLib is started, if `watch=True`, creation/modification events (only files) are monitored in the directory indicated by the `content` environment variable.
* Manually run the `comicscan` command for a full scan
* Call the `scan` interface to scan a specific file/folder, e.g.:

``` python
from comiclib.scan import scan
scan(["content/comic/to/scan"])  # The path should be a subpath to the directory indicated by the `content` environment variable
# For folders, this means trying to treat the folder itself as a comic rather than searching for multiple comics in it
```

Use the same environment variables when executing the above command. If the setting involves relative paths, keep the working directory consistent.

## Scanning process

* All files/folders in the directory indicated by the `content` environment variable are candidates for comics
* Relative paths are an important identifier of comics. This means that if a comic is moved elsewhere, ComicLib will think it is another comic; comics with the same path will be skipped when rescanning, unless `skip_exists=False`; move the entire comic library elsewhere and modify the `content` environment variable to keep the relative relationship unchanged will not need a rescanning.
* The main part of ComicLib is only responsible for traversing the comic library. The judgment of comic files are completed through scanners.
* [Scanner](scanner.md) is also responsible for metadata analysis and thumbnail extraction of comics.
* During a complete scan, if an error occurs in the [scanner](scanner.md), the entire scan will be stopped to allow the user to determine the error, but the scan progress will be retained.
* Errors encountered during monitoring will be ignored.