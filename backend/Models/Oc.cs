using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Oc
{
    public decimal TransId { get; set; }

    public string? OmyIp { get; set; }

    public string? NmyIp { get; set; }

    public string? Dbn { get; set; }

    public string? Dbpass { get; set; }

    public string? Nou { get; set; }

    public string? SerUid { get; set; }

    public string? SerPwd { get; set; }
}
