﻿using Microsoft.AspNetCore.Mvc;

namespace MapViewer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public string Get()
        {
            return "api version 1.0";
        }

        [HttpGet("SendFeature")]
        public bool SendFeature(string feature)
        {
            return true;
        }
        [HttpGet("HelloWorld")]
        public string HelloWorld()
        {
            return "Hello, World! =)";
        }
    }
}