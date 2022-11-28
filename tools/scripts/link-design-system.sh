#!/bin/bash

# We need to link react and react-dom in addition to the design-system lib
# https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react
# "  This problem can also come up when you use npm link or an equivalent.
#    In that case, your bundler might “see” two Reacts —
#    one in application folder and one in your library folder.
#    Assuming myapp and mylib are sibling folders,
#    one possible fix is to run npm link ../myapp/node_modules/react from mylib.
#    This should make the library use the application’s React copy.  "

# Instead, we link all pakages out from the library and then link them all into the application
# https://stackoverflow.com/a/64650373
cd node_modules/react
npm link

cd ../react-dom
npm link

cd ../../dist/libs/design-system
npm link
