/**
 * 
${} is a placeholder that is used in template literals.
The expression used inside ${} is executed at runtime, and its output is passed as a string to template literals

 */
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    /**
     * The replace() method returns a new string with some or all matches of a pattern replaced by a replacement
     */
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
