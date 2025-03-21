using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MyAvr8081
{
    public decimal TransId { get; set; }

    public string Pid { get; set; } = null!;

    public decimal? Opa { get; set; }

    public decimal? Pa { get; set; }

    public decimal? Opq { get; set; }

    public decimal? Pq { get; set; }

    public decimal? EachAvr { get; set; }

    public string? EntryBy { get; set; }

    public DateTime EntryDate { get; set; }

    public string BrId { get; set; } = null!;
}
