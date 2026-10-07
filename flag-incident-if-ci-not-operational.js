(function executeRule(current, previous /*null when async*/) {

    // Only run if this incident has a CI linked to it
    if (!current.cmdb_ci) {
        return;
    }

    // Check the linked CI's operational status
    // In ServiceNow, "1" means Operational
    var ciStatus = current.cmdb_ci.operational_status;

    if (ciStatus != 1) {
        current.urgency = 1;
        current.work_notes = 'Linked CI (' + current.cmdb_ci.getDisplayValue() + ') is currently non-operational. Priority escalated automatically.';
    }

})(current, previous);