from pathlib import Path
p=Path(__file__).resolve().parent.parent/"app/src/main/java/com/polyglot/speakingacademy/MainActivity.java"
lines=p.read_text("utf8").splitlines()
found=[i for i,line in enumerate(lines) if 'String search="intitle:' in line]
assert len(found)==1, "Expected exactly one search expression"
lines[found[0]]=r'''        String search="intitle:\""+phrase.replace('"',' ').trim()+"\" \"("+fileLang(lang)+")\"";'''
p.write_text("\n".join(lines)+"\n","utf8")
print("Fixed Java search string escaping and verified single replacement.")
