const Login = () => {
    return (
        <div class="container">
            <h2>Sign Up</h2>
            <form action="#">
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required></input>
                </div>
                <div className="form-group">
                    <label for="confirm_password">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required></input>
                </div>
                <button type="submit" class="btn">
                    Sign Up
                </button>
                <h3>Already registered? Sign in</h3>
            </form>
        </div>
    );
};

export default Login;

// 1. b. Tinggi teks pada elemen HTML
// 2. b. baseline.css
// 3. b. Struct
// 4. b. 012
// 5. c. $("".headtable").hide();
// 6. d. $('tr:gt(3)').hide();
// 7. b.
// 8. c.
// 9. c.
// 10. a. Jinja2
// 11. b. Menyusun aturan CSS bersarang di dalam satu aturan induk
// 12. e.
// 13. d.
// 14. c.
// 15. c.
