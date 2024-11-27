function checkUserSession(req, res, next) {
    if (req.session.admin_data?.id) {
        if (req.session.admin_data?.user_type === 1) {
            return next();
        } else if (req.session.admin_data?.user_type === 2) {
            return res.redirect('/gh-admin/dashboard');
        } else if (req.session.admin_data?.user_type === 3 || req.session.admin_data?.user_type === 4 || req.session.admin_data?.user_type === 5) {
            return res.redirect('/org-admin/dashboard');
        }
    }else{
        return res.redirect('/admin/');
    }
}

function preventUserSession(req, res, next) {
    if (req.session.admin_data?.id) {
        if (req.session.admin_data?.user_type === 1) {
            return res.redirect('/admin/dashboard');
        } else if (req.session.admin_data?.user_type === 2) {
            return res.redirect('/gh-admin/dashboard');
        }else if (req.session.admin_data?.user_type === 3 || req.session.admin_data?.user_type === 4 || req.session.admin_data?.user_type === 5) {
            return res.redirect('/org-admin/dashboard');
        }
    }
    next();
}