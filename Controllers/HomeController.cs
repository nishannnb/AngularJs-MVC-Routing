using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJs_MVC_Routing.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult User(int id)
        {
            ViewBag.Message = "Your user page.";

            return View();
        }

        public ActionResult Fun()
        {
            ViewBag.Message = "Your fun page.";

            return View();
        }

        [HttpPost]
        public JsonResult CreateCustomer(Customer model)
        {
            if (ModelState.IsValid)
            {
                //Data save to database
                var RedirectUrl = Url.Action("About", "Home", new { area = "" });
                return Json(new { success = true, redirectUrl = RedirectUrl });
            }
            return Json(new
            {
                success = false,
                errors = ModelState.Keys.SelectMany(i => ModelState[i].Errors).Select(m => m.ErrorMessage).ToArray()
            });
        }
    }
}