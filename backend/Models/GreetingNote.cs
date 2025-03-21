using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class GreetingNote
{
    public decimal TransId { get; set; }

    public string? GreetingNote1 { get; set; }

    public string? UpdateBy { get; set; }

    public string? UpdateSys { get; set; }

    public DateTime? UpdateDate { get; set; }
}
