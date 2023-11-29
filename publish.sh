pip install -U build twine hatch
rm -rf ./build
rm ./dist/*
python3 -m build
twine upload dist/*
rm -rf ./build