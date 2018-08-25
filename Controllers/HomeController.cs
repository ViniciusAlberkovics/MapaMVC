using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MapaMVC.Controllers
{
    public class HomeController : Controller
    {
		[HttpGet]
		//[Route("Home/Index/{origin}/{destiny}")]
        public ActionResult Index(string Origin, string Destiny)
        {

            if((Origin != null) && (Destiny != null))
			{
				ViewData["Origin"] = Origin;
				ViewData["Destiny"] = Destiny;
			}

			return View();
        }
    }
}